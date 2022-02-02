"use strict";
//require('dotenv').config()
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    secretKey: process.env.SECRET_KEY || '',
    mongoUrl: {
        'dev': process.env.DB_CONNECTION_DEV || '',
        'local': process.env.DB_CONNECTION_LOCAL || '',
        'prod': process.env.DB_CONNECTION_PROD || '',
        'admin': process.env.DB_CONNECTION_ADMIN || '',
        'cluster': process.env.DB_CONNECTION_CLUSTER || ''
    },
    facebook: {
        'clientId': process.env.FACEBOOK_CLIENT_ID || '',
        'clientSecret': process.env.FACEBOOK_CLIENT_SECRET || ''
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jpbi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRCQUE0Qjs7O0FBRWYsUUFBQSxNQUFNLEdBQUc7SUFDcEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUU7SUFDdkMsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksRUFBRTtRQUMxQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFO1FBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUU7UUFDNUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLElBQUksRUFBRTtRQUM5QyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFO0tBQ25EO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksRUFBRTtRQUNoRCxjQUFjLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsSUFBSSxFQUFFO0tBQ3pEO0NBRUYsQ0FBQSJ9