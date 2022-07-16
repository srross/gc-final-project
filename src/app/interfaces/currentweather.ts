import { DeclarationListEmitMode } from "@angular/compiler";
import { TemplateDefinitionBuilder } from "@angular/compiler/src/render3/view/template";

export interface CurrentWeather {
    LocalObservationDateTime: Date;
    WeatherText: string;
    Temperature: Temperature;
    RelativeHumidity: number;
    Wind: Wind;
    CloudCover: number;
    ApparentTemperature: ApparentTemperature;
}

export interface ApparentTemperature {
    Metric: Metric;
    Imperial: Imperial;
}

export interface Direction {
    Degrees: number;
    Localized: string;
    English: string;
}

export interface Imperial {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
}

export interface Metric {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
}

export interface Speed {
    Metric: Metric;
    Imperial: Imperial;
}

export interface Temperature {
    Metric: Metric;
    Imperial: Imperial;
}

export interface Wind {
    Direction: Direction;
    Speed: Speed;
}
