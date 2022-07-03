<div id="top"></div>

<div align="center">
  <h1 align="center">CRUD Blog</h1>

  <p align="center">
It's Sample of <b>CRUD Blog</b> that allows users to Create, Read, Update and Delete blog posts. 
Using <b>Django</b> as back-End to Handle Database and <b>Django REST Framework</b> to serve REST API for post manipulation in database and also login, logout and identify users through <b>HTTP</b>  with <b>Token Authentication</b>  system. Using <b>VueJS 3</b> as Front-End framework to create a single page applications As well as taking advantage of reactivity of that and also it's Responsive by <b>Bootstrap 5</b>
  
  </p>
</div>
<div>
	<img src="https://user-images.githubusercontent.com/74768669/169647855-840dd9cc-668c-4553-8e74-8b3b3572b3b5.png" alt="home_page" >
</div>

### Built With
 * [Django](https://www.djangoproject.com/)
 * [Django REST Framework](https://www.django-rest-framework.org/)
* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com)


### Prerequisites

* nodejs
  ```sh
  sudo apt install nodejs
  ```
 * python (Debian)
  ```sh
  sudo apt install python
  ```
for other platforms go to  [this link](https://www.python.org/downloads/)
### Installation

Clone the repo
   ```sh
   git clone https://github.com/cybera3s/vueJs-CRUD-blog.git
   ```
change directory to frontend and install required packages
   ```sh
   cd frontend && npm install
   ```
run development server
   ```sh
   npm run serve
   ```
if everything goes well and server is running then for the server side: 
 change directory to backend 
	 
    cd ../backend
create virtual environment 

    python -m virtualenv venv
  activate venv
  

    source venv/bin/activate

install required packages

    pip install -r requirements.txt
create databse tables

    python manage.py makemigrations api
    python manage.py migrate
create a super user

    python manage.py createsuperuser

start Django deveopment server

    python manage.py runserver

if everything goes well go to:   http://localhost:8080
 


<!-- USAGE EXAMPLES -->
## Usage

if both development servers or up go to home page by
 http://localhost:8080
You can log in with the username and password you created for your superuser
after log in you redirect to [students](http://localhost:8080/students) table page you can add or delete any row of table

Any other usage and information served API will find in http://127.0.0.1:8000/swagger/

<!-- LICENSE -->
## License

Distributed under the GPL License




<!-- CONTACT -->
## Contact

Sajad Safa - cybera.3s@gmail.com

Project Link: [https://github.com/cybera3s/vueJs-CRUD-blog](https://github.com/cybera3s/vueJs-CRUD-blog)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/cybera3s/vueJs-CRUD-blog.svg?style=for-the-badge
[contributors-url]: https://github.com/cybera3s/vueJs-CRUD-blog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/cybera3s/vueJs-CRUD-blog.svg?style=for-the-badge
[forks-url]: https://github.com/cybera3s/vueJs-CRUD-blog/network/members
[stars-shield]: https://img.shields.io/github/stars/cybera3s/vueJs-CRUD-blog.svg?style=for-the-badge
[stars-url]: https://github.com/cybera3s/vueJs-CRUD-blog/stargazers
[issues-shield]: https://img.shields.io/github/issues/cybera3s/vueJs-CRUD-blog.svg?style=for-the-badge
[issues-url]: https://github.com/cybera3s/vueJs-CRUD-blog/issues
[license-shield]: https://img.shields.io/github/license/cybera3s/vueJs-CRUD-blog.svg?style=for-the-badge
[license-url]: https://github.com/cybera3s/vueJs-CRUD-blog/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/cybera3s
[product-screenshot]: images/screenshot.png
