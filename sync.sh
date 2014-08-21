s3cmd put --acl-public --recursive --config=chrisbolin.me.s3config \
	./ s3://chrisbolin.me \
	--exclude=.git/* --exclude=*s3config --exclude=.DS_Store \
	--exclude=*.sh --exclude=.gitignore --exclude=img/*