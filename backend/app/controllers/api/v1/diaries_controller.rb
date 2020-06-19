class Api::V1::DiariesController < ApplicationController

    def index
        @diaries = Diary.all

        render json: PetSerializer.new(@diaries).serialized_json
    end

    def create
        @diary = Diary.new(diary_params)
        if diary.save 
            render json: DiarySerializer.new(@diary).serialized_json, status: :created
        else 
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end

    def show 
        @diaries = Diary.find(params[:id])
        render json: DiarySerializer.new(@diaries).serialized_json
    end

    def update
        if diary.update(diary_params)
            render json: DiarySerializer.new(@diary).serialized_json
        else 
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end


    def destroy
        diary = Diary.find(params[:id])
        if diary.destroy
            head :no_content
        else 
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end


    private

    def diary_params
        params.require(:diary).permit(:title, :post, :create_at, :pet_id)
    end
end
