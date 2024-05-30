interface PriceConfiguration {
    [key: string]: {
        priceType: "base" | "additional";
        available: string[];
    };
}

interface Attribute {
    name: string;
    widgetType: "switch" | "radio";
    defaultValue: string;
    availableOptions: string[];
}

export interface Category {
    name: string;
    priceConfiguration: PriceConfiguration;
    attributes: Attribute[];
}
