class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.text :notes
      t.timestamp :created
      t.boolean :automated_test
      t.boolean :manual_test

      t.timestamps
    end
  end
end
