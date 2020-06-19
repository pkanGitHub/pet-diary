class API::V1::PetsController < ApplicationController

    def index
        @pets = Pet.all

        render json: PetSerializer.new(@pets).serialized_json
    end

    def create
        @pet = Pet.new(pet_params)
        if @pet.save
            render json: PetSerializer.new(@pet).serialized_json, status: :created
        else
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end

    def update
        @pet = Pet.find(pet_params)
        if @pet.save
            render json: PetSerializer.new(@pet).serialized_json, status: :created
        else
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end

    def show
        @pet = Pet.find(pet_params)

        render json: PetSerializer.new(@pet).serialized_json
    end

    private

    def pet_params
        params.require(:pet).permit(:name, :birth_date, :age)
    end
end
