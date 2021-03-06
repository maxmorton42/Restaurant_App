class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :destroy]

  def index
    render json: Menu.order("created_at")
  end

  def show
    render json: @menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }
    end
  end

  def update
    @menu.update(name: name)
    render json: @item
  end

  def destroy
    @menu.destroy
    render json: { message: "Item deleted"}
  end

  private
  def set_menu
    @menu = Menu.find(params[:id])
  end

  def menu_params
    params.require(:menu).permit(:name,)
  end

end
