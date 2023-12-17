// const express = require("express");
// const router = express.Router();
// const UserController = require("../controllers/userController");

// /**
//  * @swagger
//  components:
//   schemas:
//     User:
//       type: object
//       required:
//         - userRegisterId
//         - firstName
//         - lastName
//         - email
//         - phone
//         - address
//       properties:
//         userRegisterId:
//           type: integer
//         firstName:
//           type: string
//         lastName:
//           type: string
//         email:
//           type: string
//           format: email
//         phone:
//           type: integer
//         address:
//           type: array
//           minLength: 20;
//           items:
//             $ref: '#/components/schemas/Address'
//     Address:
//       type: object
//       required:
//         - lane_No
//         - city
//         - zipcode
//       properties:
//         lane_No:
//           type: string
//         city:
//           type: string
//         zipcode:
//           type: integer
//  */


// //routers for various api's.
// /**
//  * @swagger
//  * paths:
//   /users:
//     get:
//       summary: Get all users
//       responses:
//         '200':
//           description: Successful response
//           content:
//             application/json:
//               example:
//                 - $ref: '#/components/schemas/User'
//         '404':
//           description: No users found
//           content:
//             application/json:
//               example:
//                 error: "No users found"
//  */
// router.get("/", UserController.getAllUser);
// // router.post("/login", UserController.getLogin);

// /**
//  * @swagger
//  * /users/register:
//  *  post:
//       summary: Create a new user
//       requestBody:
//         required: true
//         content:
//           application/json:
//             example:
//               $ref: '#/components/schemas/User'
//       responses:
//         '201':
//           description: User created successfully
//           content:
//             application/json:
//               example:
//                 message: "User created successfully"
//         '400':
//           description: Bad request
//           content:
//             application/json:
//               example:
//                 error: "Invalid input data"
//         '500':
//           description: Internal server error
//           content:
//             application/json:
//               example:
//                 error: "Internal server error"
//  */
// router.post("/register", UserController.registerUser);

// /**
//  * @swagger
//  * /users/{id}:
//     get:
//       summary: Get a user by ID
//       parameters:
//         - name: id
//           in: path
//           required: true
//           schema:
//             type: integer
//           example: 6
//       responses:
//         '200':
//           description: Successful response
//           content:
//             application/json:
//               example:
//                 $ref: '#/components/schemas/User'
//         '404':
//           description: User not found
//           content:
//             application/json:
//               example:
//                 error: "User not found"
//         '500':
//           description: Internal server error
//           content:
//             application/json:
//               example:
//                 error: "Internal server error"

//  */
// router.get("/:id", UserController.getRegisterUserById);

// /**
//  * @swagger
//  * /users/:id
//  *    put:
//       summary: Update a user by ID
//       parameters:
//         - name: id
//           in: path
//           required: true
//           schema:
//             type: integer
//           example: 6
//       requestBody:
//         required: true
//         content:
//           application/json:
//             example:
//               $ref: '#/components/schemas/User'
//       responses:
//         '200':
//           description: User updated successfully
//           content:
//             application/json:
//               example:
//                 message: "User updated successfully"
//         '400':
//           description: Bad request
//           content:
//             application/json:
//               example:
//                 error: "Invalid input data"
//         '404':
//           description: User not found
//           content:
//             application/json:
//               example:
//                 error: "User not found"
//         '500':
//           description: Internal server error
//           content:
//             application/json:
//               example:
//                 error: "Internal server error"
//  */
// router.put("/:id", UserController.updateRegisterUser);

// /**
//  * @swagger
//  * /users/:id
//  *    delete:
//       summary: Delete a user by ID
//       parameters:
//         - name: id
//           in: path
//           required: true
//           schema:
//             type: integer
//           example: 6
//       responses:
//         '204':
//           description: User deleted successfully
//         '404':
//           description: User not found
//           content:
//             application/json:
//               example:
//                 error: "User not found"
//         '500':
//           description: Internal server error
//           content:
//             application/json:
//               example:
//                 error: "Internal server error"
//  */
// router.delete("/:id", UserController.deleteRegisterUser);

// /**
//  * @swagger
//  * /users/filter:
//  *   get:
//  *     summary: Filter Register User By Id
//  *     description:  Filter Register User By Id
//  *     responses:
//  *       200:
//  *         description: Filter User successfuly
//  */
// router.get("/filter", UserController.listAllRegisterUsers);

// module.exports = router;
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - userRegisterId
 *        - firstName
 *        - lastName
 *        - email
 *        - phone
 *        - address
 *      properties:
 *        userRegisterId:
 *          type: integer
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        email:
 *          type: string
 *          format: email
 *        phone:
 *          type: integer
 *        address:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Address'
 *    Address:
 *      type: object
 *      required:
 *        - lane_No
 *        - city
 *        - zipcode
 *      properties:
 *        lane_No:
 *          type: string
 *        city:
 *          type: string
 *        zipcode:
 *          type: integer
 */

// Routers for various APIs.
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - $ref: '#/components/schemas/User'
 *       '404':
 *         description: No users found
 *         content:
 *           application/json:
 *             example:
 *               error: "No users found"
 */
router.get("/", UserController.getAllUser);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "User created successfully"
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: "Invalid input data"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */
router.post("/register", UserController.registerUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 6
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */
router.get("/:id", UserController.getRegisterUserById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 6
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "User updated successfully"
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: "Invalid input data"
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */
router.put("/:id", UserController.updateRegisterUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 6
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */
router.delete("/:id", UserController.deleteRegisterUser);

/**
 * @swagger
 * /users/filter:
 *   get:
 *     summary: Filter Register User By Id
 *     description: Filter Register User By Id
 *     responses:
 *       '200':
 *         description: Filter User successfully
 */
router.get("/filter", UserController.listAllRegisterUsers);

module.exports = router;
