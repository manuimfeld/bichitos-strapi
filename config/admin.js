module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bbf3572280a65caef90619d6729b5340'),
  },
});
