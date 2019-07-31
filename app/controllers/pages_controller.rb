class PagesController < ApplicationController
	before_action :authenticate_user!, only: :dashboard

	def home
	end

	def dashboard
		@task = Task.new
		@tasks = current_user.tasks
		@label = Label.new
	end
end
