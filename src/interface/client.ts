export interface Client {
    homeSliders:  Home[];
    homeBanners: Home[];
    date:        DateClass;
}

export interface DateClass {
    name:        string;
    domain:      string;
    dataBase:    string;
    logo:        string;
    phoneNumber: number;
    map?:         string;
}

export interface Home {
    title:   string;
    content: string;
    image:   string;
}
