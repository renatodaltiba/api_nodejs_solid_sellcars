import { ICategoriesRepository } from "../../repositories/Categories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categorieRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categorieRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists");
        }

        this.categorieRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
