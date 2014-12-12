class IdeasController < ApplicationController
  # GET /ideas
  # GET /ideas.json
  # def index
  #   @ideas = Idea.all

  #   render json: @ideas
  # end

  def index
    ideas = Idea.date_type(options["date_type"]).drinks(options["drinks"]).romantic(options["romantic"]).hipster(options["hipster"]).date_number(options["date_number"].speakeasy(options["speakeasy"])
    render json: ideas
  end

  # # GET /ideas/1
  # # GET /ideas/1.json
  # def show
  #   @idea = Idea.find(params[:id])

  #   render json: @idea
  # end

  # # POST /ideas
  # # POST /ideas.json
  # def create
  #   @idea = Idea.new(idea_params)

  #   if @idea.save
  #     render json: @idea, status: :created, location: @idea
  #   else
  #     render json: @idea.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /ideas/1
  # # PATCH/PUT /ideas/1.json
  # def update
  #   @idea = Idea.find(params[:id])

  #   if @idea.update(idea_params)
  #     head :no_content
  #   else
  #     render json: @idea.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /ideas/1
  # # DELETE /ideas/1.json
  # def destroy
  #   @idea = Idea.find(params[:id])
  #   @idea.destroy

  #   head :no_content
  # end

  private
    
  def options
    defaults.merge(params)
  end

  def defaults
    {"date_type" => "", "drinks" => "", "romantic" => "", "hipster" => "", "date_number" => "", "speakeasy" => ""}
  end
end
