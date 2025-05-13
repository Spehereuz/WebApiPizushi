using Microsoft.EntityFrameworkCore;
using WebApiPizushi.Data.Enteties;

namespace WebApiPizushi.Data;

public class AppDbPizushiContext : DbContext
{
    public AppDbPizushiContext(DbContextOptions<AppDbPizushiContext> opt) : base(opt) { }

    public DbSet<CategoryEntity> Categories { get; set; }
}
