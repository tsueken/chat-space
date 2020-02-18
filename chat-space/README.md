# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

# chat_space_DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|Password_confirmation|string|null: false|
|tweet_id|integer|null: false, foreign_key: true|
|groups_users_id|integer|null: false, foreign_key: true|
### Association
- has_many :tweets
- has_many :groups, through:  :users_groups
###AddIndexToUser
- add_index :users, :name
- add_index :users, :email, unique: true


## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|text|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
###AddIndexToTweet
- add_index :tweets, [:text, :image]

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|tweet_id|integer|null: false, foreign_key: true|
|groups_users_id|integer|null: false, foreign_key: true|
### Association
- has_many :users,   through:  :users_groups
- has_many :tweets  
###AddIndexToGroup
- add_index :groups, :text


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
