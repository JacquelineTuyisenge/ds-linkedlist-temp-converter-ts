import React, { Component } from "react";

interface TempConverterState {
    celcius: string;
    fahrenheit: string;
}

class TempConverter extends Component<{}, TempConverterState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            celcius: "",
            fahrenheit: "",
        };
    }

    handleCelciusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const celcius = event.target.value;
        this.setState({ 
            celcius,
            fahrenheit: celcius ? this.convertToFarenheit(celcius) : ''
        });
    };

    handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fahrenheit = event.target.value;
        this.setState({ 
            fahrenheit,
            celcius: fahrenheit ? this.convertToCelcius(fahrenheit) : ''
        });
    };

    convertToCelcius(fahrenheit: string): string {
        const f = parseFloat(fahrenheit);
        return ((f - 32) * 5 / 9).toFixed(2);
    }

    convertToFarenheit(celcius: string): string {   
        const c = parseFloat(celcius);
        return ((c * 9 / 5) + 32).toFixed(2);
    }

    render() {
        const { celcius, fahrenheit } = this.state;
        return (
            <div>
                <h1>Temperature Converter</h1>
                <div className ="temp">
                    <label>Celcius: </label>
                    <input
                        type="number"
                        value={celcius}
                        onChange={this.handleCelciusChange}
                    />
                </div>
                <div className ="temp">
                    <label>Fahrenheit: </label>
                    <input
                        type="number"
                        value={fahrenheit}
                        onChange={this.handleFahrenheitChange}
                    />
                </div>
            </div>
        );
    }
}

export default TempConverter;