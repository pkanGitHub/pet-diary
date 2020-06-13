class UsersController < ApplicationController

  # GET /users
def index
    @users = User.all
    if @users
      render json: {
        users: @users
      } 
    else
      render json: {
        status: 500,
        errors: ['no users found']
      }
    end
end

  # GET /users/1
def show
    set_user
    if @user
      render json: {
        user: @user
      } 
    else 
      render json: {
        status: 500,
        errors: ['user not found']
      }
  end
end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      login!
      render json: {
        status: :created,
        user: @user 
      }
    else
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password_digest)
    end
end
