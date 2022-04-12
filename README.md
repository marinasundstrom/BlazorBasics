# BlazorApp

A project containing various samples that demonstrate the basics of Blazor.

No CSS framework. Just vanilla HTML and minimal styling.

[Video](https://www.youtube.com/watch?v=KnLGNEiuyxk)

## Contents

This is what is shown:

* Components
    * Parameters - inc. Two-way parameter binding
    * Event callbacks
    * CSS Isolation
* Dependency injection
    * HttpClient
* JavaScript interop
    * Calling JS functions from C#
    * Calling C# methods from JavaScript
    * Passing ElementReferences and ObjectReferences between JS and .NET.

**NOT** covered: Routing, Cascading parameters, JS Isolation, and more...
    
## Requirements

To build this, you need:

* .NET 6 SDK (lastest)
* VS Code or Visual Studio (if you don't prefere Notepad :) )

## Run the project

```
dotnet run
```

or

```
dotnet watch
```



## Project structure

The project is organized like this:

```
- BlazorApp
    - Demos (Demo components)
    - wwwroot
        - css
            - app.css
        - js
            - app.js
        - index.html
    - _Imports.razor
    - BlazorApp.csproj
    - App.razor
    - Counter.razor
    - Counter.razor.css
    - GlobalUsings.cs
    - Program.cs
```

### Program.cs
The actual entry point of your app. 

This is where you register you services for dependency injection.

### GlobalUsings.cs
Contains global ```using``` statements that will apply to all *.cs* files.

### _Imports.razor
Contains ```using``` statements that will apply to all components (*.razor* files)

### wwwroot
Contains all static assets (CSS, JavaScript, images etc).

Also the *index.html* file that bootstraps the Blazor app.

For the JS Interop demo, there is code defined in *js/app.js*.

### App.razor
A component that is set up as the root component in *Program.cs*.

It uses components from the *Demos* folder.

### Counter.razor
A component that displays a current count that can be incremented by clicking the button.

### Counter.razor.css
Contains CSS styles that will just apply to the ```Counter``` component.
