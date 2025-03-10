from flask import Flask, render_template, request, redirect, url_for
from flask_pymongo import PyMongo

app = Flask(__name__)

# MongoDB Connection
app.config["MONGO_URI"] = "mongodb+srv://sample_yt:XLxeLLukLEFFhhs5@clustersample.yegxx.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=ClusterSample"
mongo = PyMongo(app)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/prod.html")
def prod():
    return render_template("prod.html")


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        password = request.form.get('password')

        print(f"Received Data: {first_name}, {last_name}, {email}, {password}")  # Debugging

        # Save to MongoDB
        mongo.db.users.insert_one({
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password
        })

        return redirect(url_for('sample'))

    return render_template('signup.html')

@app.route("/sample")
def sample():
    return "ACCOUNT CREATED SUCCESSFULLY"


if __name__ == '__main__':
    app.run(debug=True)
