//==============================================================================
// DB
//==============================================================================

export interface UsersDBResponse {
    user_id: number;
    username: string;
    user_password: string;
    user_avatar: string;
}

//==============================================================================
// Request Body
//==============================================================================

export interface LoginBody {
    username: string;
    password: string;
}

//==============================================================================
// Response
//==============================================================================

export interface UserResponse {
    userId: number;
    userName: string;
    userAvatar: string;
    token: string;
    expires: string;
}

//==============================================================================
// Internal
//==============================================================================

export interface Status {
    userId: number;
    statusExpiredAt: number;
}
