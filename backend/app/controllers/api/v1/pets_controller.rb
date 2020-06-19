class Api::V1::PetsController < ApplicationController

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
        if @pet.update(pet_params)
            render json: PetSerializer.new(@pet).serialized_json
        else
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end

    def show
        @pet = Pet.find(params[:id])

        render json: PetSerializer.new(@pet).serialized_json
    end

    def destroy
        @pet = Pet.find(params[:id])

        if @pet.destroy
           head :no_content
        else
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end

    private

    def pet_params
        params.require(:pet).permit(:name, :birth_date)
    end
end
