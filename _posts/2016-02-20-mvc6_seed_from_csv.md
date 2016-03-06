---
layout: post
title: MVC 6 Seed from CSV
---

How to seed an ASP.NET 5 MVC 6 project using Entity Framework 7 from csv files.

## Startup.cs
Add the application environment to Startup.cs.

``` 
public Startup(IHostingEnvironment env,  IApplicationEnvironment appEnv) {
```

Add an AppSeedData.Initialize() call at the end of the Startup.cs Configure method and pass in the appEnv.ApplicationBasePath.

```
 public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IApplicationEnvironment appEnv)
{
    ...
          
    AppSeedData.Initialize(app.ApplicationServices, appEnv.ApplicationBasePath);
}
        
```

## Models/SeedData

Add a Models/SeedData folder with one csv file for each entity to be seeded.

In AppSeedData.cs, delete all records (in reverse order to the insertion) and re-seed them:

```
            context.Movies.RemoveRange(context.Movies);
            context.Locations.RemoveRange(context.Locations);
            context.SaveChanges();

            SeedLocationsFromCsv(relPath, context);
            SeedMoviesFromCsv(relPath, context);
```

In AppSeedData.cs, create the required Seed from Csv methods.

```
  private static void SeedMoviesFromCsv(string relPath, AppDbContext context) {
            string source = relPath + "movie.csv";
            if (!File.Exists(source)) {
                throw new Exception("Cannot find file " + source);
            }
            Movie.ReadAllFromCSV(source);
            List<Movie> lst = Movie.ReadAllFromCSV(source);
            context.Movies.AddRange(lst.ToArray());
            context.SaveChanges();
 }
        
```

## Models

In each model file, create methods to read from a csv file.

```
  public static List<Movie> ReadAllFromCSV(string filepath) {
    List<Movie> lst = File.ReadAllLines(filepath)
                          .Skip(1)
                          .Select(v => Movie.OneFromCsv(v))
                          .ToList();
    return lst;
  }

  public static Movie OneFromCsv(string csvLine) {
    string[] values = csvLine.Split(',');
    Movie item = new Movie();
    int i = 0;
    item.Name = Convert.ToString(values[i++]);
    item.LocationID = Convert.ToInt32(values[i++]);
    return item;
 }
```

## Views

Modify the scaffolded views to display drop-down lists for the foreign keys. 

## Sample Project

See https://bitbucket.org/NW-44-663-2016/datacase/overview for full code sample.

