class CreateLearningModules < ActiveRecord::Migration[5.0]
  def change
    create_table :learning_modules do |t|
      t.string :title
      t.text :content
      t.references :posted_by, :references => :admins, :index => true
      t.string :custom_posted_by
      t.string :slug

      t.timestamps
    end
  end
end
