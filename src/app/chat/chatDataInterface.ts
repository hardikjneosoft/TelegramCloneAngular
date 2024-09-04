export interface ChatData {
    [key: string]: {
        name: string;
        time: string;
        pimg: string;
        unread: number;
        msg: string[];
    };
}

