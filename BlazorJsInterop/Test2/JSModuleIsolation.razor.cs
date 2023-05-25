using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;

namespace BlazorJsInterop.Test2;

[SupportedOSPlatform("browser")]
public partial class JSModuleIsolation
{
    [JSImport("showPrompt", "JSModuleIsolation")]
    internal static partial string ShowPrompt(string message);
}