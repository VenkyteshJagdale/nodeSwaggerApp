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
 *          minLength: 2
 *          maxLength: 50
 *        lastName:
 *          type: string
 *          minLength: 2
 *          maxLength: 50
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
 *          minLength: 2
 *          maxLength: 50
 *        city:
 *          type: string
 *          minLength: 2
 *          maxLength: 50
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
 *               - userRegisterId: 1
 *                 firstName: "Venky"
 *                 lastName: "jagdale"
 *                 email: "Venky.jagdale@gmail.com"
 *                 phone: 1234567890
 *                 address:
 *                   - lane_No: "123 Main St"
 *                     city: "Cityville"
 *                     zipcode: 12345
 *               - userRegisterId: 2
 *                 firstName: "venky"
 *                 lastName: "jagdale"
 *                 email: "venky.jagdale@gmail.com"
 *                 phone: 9876543210
 *                 address:
 *                   - lane_No: "456 Oak St"
 *                     city: "Townsville"
 *                     zipcode: 67890
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
 *             userRegisterId: 1
 *             firstName: "Venky"
 *             lastName: "jagdale"
 *             email: "Venky.jagdale@gmail.com"
 *             phone: 1234567890
 *             address:
 *               - lane_No: "123 Main St"
 *                 city: "Cityville"
 *                 zipcode: 12345
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
@swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: 6580809a5252815eb7ea41d0
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               userRegisterId: 6
 *               firstName: "Venky"
 *               lastName: "jagdale"
 *               email: "Venky.jagdale@gmail.com"
 *               phone: 1234567890
 *               address:
 *                 - lane_No: "123 Main St"
 *                   city: "Cityville"
 *                   zipcode: 12345
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
 *           type: string
 *         example: 6580809a5252815eb7ea41d0
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             userRegisterId: 6
 *             firstName: "UpdatedFirstName"
 *             lastName: "UpdatedLastName"
 *             email: "updated.email@gmail.com"
 *             phone: 9876543210
 *             address:
 *               - lane_No: "Updated Lane"
 *                 city: "UpdatedCity"
 *                 zipcode: 54321
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
 *           type: string
 *         example: 6580809a5252815eb7ea41d0
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

module.exports = router;
