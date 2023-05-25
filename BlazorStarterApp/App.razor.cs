using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;

namespace BlazorStarterApp;

[SupportedOSPlatform("browser")]
public partial class App
{
    protected override async Task OnInitializedAsync()
    {
        await JSHost.ImportAsync("App", 
            "../App.razor.js");
    }

    [JSImport("showToast", "App")]
    internal static partial void ShowToast();
}