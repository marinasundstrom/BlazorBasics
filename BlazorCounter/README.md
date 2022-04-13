# BlazorCounter

## Counter

Simple component. Each time that you click the button, the count is incremented by 1.

## CounterV2

Turns ```currentCount``` into a parameter. This enables you to set an initial value for the Counter component.

In addition, an ```IncrementBy``` parameter lets you decide by what number the count should increment with each click.

## CounterV3

Adds two-way binding to ```CurrentCount``` using the ```CurrentCountChanged``` parameter property.

The Blazor directive ```@bind-CurrentCount``` makes Blazor, in addition to assigning the value of variable to the parameter, subscribe to the ```CurrentCountChanged``` event that updates the value of that variable.

You may handle ```CurrentCountChanged``` manually if you want to, and perform some custom logic. Then you can decide whether, or not, to pass the value back to ```CurrentCount```.

```csharp
<CounterV3 CurrentCount="currentCount" CurrentCountChanged="OnCurrentCountChanged" />

@code {
    int currentCount;

    void OnCurrentCountChanged(int count) 
    {
        currentCount = count;

        // Do something
    }
}
```