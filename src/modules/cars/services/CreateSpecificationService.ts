import { ISpecificationsRepository } from "../repositories/Specifications/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const speficationsAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (speficationsAlreadyExists) {
            throw new Error("Specification already exists");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}
export { CreateSpecificationService };
