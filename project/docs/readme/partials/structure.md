#### Folder Structure

We encourage you to organize your project files by feature.


##### Good

```
├── orders/
|   ├── tests/
|   |   └──orders-directive-spec.js
|   |   └──orders-service-spec.js
|   ├── templates/
|   |   └──orders-template.html
|   ├── orders-directive.js
|   ├── orders-controller.js
|   └── orders-service.js
├── users/
|   ├── tests/
|   |   └──users-directive-spec.js
|   |   └──users-service-spec.js
|   ├── templates/
|   |   └──users-template.html
│   ├── users-directive.js
│   ├── users-controller.js
|   └── order-service.js
├── home/
|   ├── templates/
│   |    └── home-template.html
|   ├── home-controller.js
```

##### Bad

```
js/
├── controllers/
│   ├── homeController.js
│   └──loginController.js
├── directives/
│   ├── usersDirective.js
│   └──ordersDirective.js
├── services/
│   ├── userService.js
│   ├── orderService.js
│   └──loginService.js
│partials/
│   ├── home.html
│   └── login.html
```
