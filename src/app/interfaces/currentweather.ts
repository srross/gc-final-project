import { DeclarationListEmitMode } from "@angular/compiler";
import { TemplateDefinitionBuilder } from "@angular/compiler/src/render3/view/template";

export interface CurrentWeather {
    localObservationDateTime: Date;
    weatherText: string;
    temperature: Temperature;
    relativeHumidity: number;
    wind: Wind;
    cloudCover: number;
    apparentTemperature: ApparentTemperature;
}

export interface ApparentTemperature {
    metric: Metric;
    imperial: Imperial;
}

export interface Direction {
    degrees: number;
    localized: string;
    english: string;
}

export interface Imperial {
    value: number;
    unit: string;
    unitType: number;
    phrase: string;
}

export interface Metric {
    value: number;
    unit: string;
    unitType: number;
    phrase: string;
}

export interface Speed {
    metric: Metric;
    imperial: Imperial;
}

export interface Temperature {
    metric: Metric;
    imperial: Imperial;
}

export interface Wind {
    direction: Direction;
    speed: Speed;
}
