﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPizushi.Data;
using WebApiPizushi.Data.Enteties;
using WebApiPizushi.Interfaces;
using WebApiPizushi.Models.Category;

namespace WebApiPizushi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController(AppDbPizushiContext pizushiContext,
    IMapper mapper, IImageService imageService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> List()
    {
        var model = await mapper.ProjectTo<CategoryItemModel>(pizushiContext.Categories)
            .ToListAsync();

        return Ok(model);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CategoryCreateModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var repeated = await pizushiContext.Categories.Where(x => x.Name == model.Name).SingleOrDefaultAsync();
        if (repeated != null)
        {
            return BadRequest($"{model.Name} already exists");
        }
        var entity = mapper.Map<CategoryEntity>(model);
        entity.Image = await imageService.SaveImageAsync(model.ImageFile!);
        await pizushiContext.Categories.AddAsync(entity);
        await pizushiContext.SaveChangesAsync();
        return Ok(entity);
    }
}