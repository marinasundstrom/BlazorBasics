# Blazor Basics


A project containing various samples that demonstrate the basics of Blazor.

Uses Bootstrap 5.

[Screenshots](/Screenshots/)

## Goal

Providing brief but yet extensive samples demonstrating the basics of Blazor. 

Answering the most common questions about building Web apps with Blazor.

### When you are ready

When you feel confident in knowing the basic concepts of Blazor you can use an open-source component framework, like [MudBlazor](https://mudblazor.com) (Material UI), [Radzen](https://blazor.radzen.com), or [Fluent UI](https://github.com/microsoft/fast-blazor). They provide business-grade components.

## Projects

### BlazorStarterApp

The minimal required for getting started with Blazor.

Uses Bootstrap.

### BlazorCounter

Several versions of the ```Counter``` component.

Demonstrates how parameters work in Blazor.

### HttpClientSample

A simple demo showing how to fetch data from the web, and display it.

### BlazorRouter

Demonstrates how the router works.

### BlazorJSInterop

Demonstrates how to do interop between C#/.NET and JavaScript.

## Requirements

To build this, you need:

* [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
* [VS Code](https://code.visualstudio.com), or Visual Studio (unless you prefer Notepad :) )

## Run the app

Simply:

```
dotnet run
```

or, in *watch* mode

```
dotnet watch
```

This will enable *Hot Reload* on save.

## Publish the app

When you are ready to publish your app you simply run this command:

```
dotnet publish -c Release
```

This will create an optimized bundle for you. 

In the process, the linker will strip out unsused dependencies in order to minimize the size.

