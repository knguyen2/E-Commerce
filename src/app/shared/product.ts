import { Feedback } from './Feedback';

export class Product {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    feedbacks: Feedback[];
}
