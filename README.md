# Simple Discord type chat app

Application provides real time message communication with group of people. User can create and get invited to rooms.

## Tech Stack

-   Typescript
-   React 1.18
-   Redux
-   MUI
-   Jest
-   Node.js
-   Express
-   Postgress
-   Websocket (socket.io)

## TODO

-   Frontend
    -   Layout :white_check_mark:
    -   Redux Store :x:
    -   Routing
    -   Message Store State :x:
        -   Actions to menage store :x:
        -   Fetching messages thunk
            -   Fetching on room entered
            -   Fetching on scroll
        -   Websockets user sended message
    -   Users Store State :x:
        -   Actions to menage store :x:
        -   Fetching users thunk :x:
        -   Websockets users status changes :x:
        -   Websockets added user
    -   Rooms Store State :x:
        -   Actions to menage store :x:
        -   Fetching rooms thunk
        -   Websockets added to room
        -   Websockets created room
    -   Login and Register Page :x:
    -   Auth Token Handling :x:
    -   Create Room Form :x:
    -   Invite User to room form :x:
    -   Virtualization :x:
-   Backend
    -   API :x:
        -   Users, GET by room / POST / :x:
            -   GET /:roomID/user :x:
            -   POST /user :x:
        -   Message, GET by room / GET by ID range / POST send message :x:
            -   GET /:roomID/messages :x:
            -   GET /:roomID/messages/:messageID :x:
            -   POST /:roomID/message :x:
        -   Rooms, GET get users rooms / POST create room / PUT add user to Room :x:
            -   GET /room :x:
            -   POST /room :x:
            -   PUT /room/:roomID :x:
    -   Websockets :x:
        -   Change user status on connected :x:
        -   Emit message on message sended :x:
        -   Emit room on create or invite :x:
        -   Emit user added to room :x:
    -   Model :x:
        -   User Model :x:
        -   Message Model :x:
        -   Rooms Model :x:
    -   PostgreSQL DB communication :x:
    -   Auth :x:
    -   Error Handling :x:
    -   Validation :x:
