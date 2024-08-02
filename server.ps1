param (
    [int]$port = 8066
)

# Start the PHP built-in server on the specified port
# php -S "localhost:$port" -t public/
php artisan serve --host=localhost --port=${port}
