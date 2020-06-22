class Api::V1::DiariesController < ApplicationController

    def index
        @diaries = Diary.find_by(pet_id: params[:pet_id])

        render json: DiarySerializer.new(@diaries).serialized_json
    end

    def all_diaries
        @diaries = Diary.all

        render json: DiarySerializer.new(@diaries).serialized_json
    end

    def create
        @diary = Diary.new(diary_params)
        if @diary.save 
            render json: DiarySerializer.new(@diary).serialized_json, status: :created
        else 
            render json: @diary.errors.messages, status: :unprocessable_entity
        end
    end

    def show 
        @diaries = Diary.find(params[:id])
        render json: DiarySerializer.new(@diaries).serialized_json
    end

    def update
        if @diary.update(diary_params)
            render json: DiarySerializer.new(@diary).serialized_json
        else 
            render json: @pet.errors.messages, status: :unprocessable_entity
        end
    end


    def destroy
        @diary = Diary.find(params[:id])
        if @diary.destroy
            head :no_content
        else 
            render json: @pets.errors.messages, status: :unprocessable_entity
        end
    end


    private

    def diary_params
        params.require(:diary).permit(:title, :post, :pet_id)
    end
end
