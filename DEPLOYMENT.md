# Deployment Guide

This guide explains how to deploy the Doctor Who Database project to various platforms.

## Prerequisites

- GitHub repository with your code
- Database hosting (MySQL) - options:
  - AWS RDS
  - Heroku Postgres (with MySQL adapter)
  - Railway MySQL
  - PlanetScale
  - ClearDB (Heroku addon)

## Platform-Specific Deployment

### Heroku

1. **Install Heroku CLI** and login:
   ```bash
   heroku login
   ```

2. **Create Heroku app**:
   ```bash
   heroku create doctor-who-db
   ```

3. **Add MySQL addon** (ClearDB):
   ```bash
   heroku addons:create cleardb:ignite
   ```

4. **Get database URL**:
   ```bash
   heroku config:get CLEARDB_DATABASE_URL
   ```

5. **Set environment variables**:
   ```bash
   heroku config:set DB_HOST=your_host
   heroku config:set DB_USER=your_user
   heroku config:set DB_PASSWORD=your_password
   heroku config:set DB_NAME=your_database
   heroku config:set NODE_ENV=production
   heroku config:set OPENAI_API_KEY=your_key
   ```

6. **Deploy**:
   ```bash
   git push heroku main
   ```

7. **Run migrations and seed**:
   ```bash
   heroku run npm run db:sync
   heroku run npm run db:seed
   ```

### Railway

1. **Connect GitHub repository** to Railway
2. **Create MySQL service** in Railway dashboard
3. **Set environment variables** in Railway:
   - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`
   - `NODE_ENV=production`
   - `OPENAI_API_KEY`
4. **Deploy** - Railway auto-deploys on git push
5. **Run migrations** via Railway CLI or dashboard

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set environment variables** in Vercel dashboard
4. **Note**: Vercel is serverless, so you may need to use serverless functions for database operations

### AWS (EC2 + RDS)

1. **Launch EC2 instance** (Ubuntu)
2. **Install Node.js and MySQL client**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs mysql-client
   ```

3. **Clone repository**:
   ```bash
   git clone <your-repo-url>
   cd "databases final project"
   npm install
   ```

4. **Create RDS MySQL instance** and note connection details
5. **Set environment variables** in `.env` file
6. **Run migrations**:
   ```bash
   npm run db:sync
   npm run db:seed
   ```

7. **Start application** with PM2:
   ```bash
   npm install -g pm2
   pm2 start src/server.js --name doctor-who-api
   pm2 save
   pm2 startup
   ```

## Database Setup on Remote Server

After deploying, you need to:

1. **Create database objects** (VIEWs and STORED PROCEDUREs):
   ```bash
   mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD $DB_NAME < database_objects.sql
   ```

2. **Or run via Node.js**:
   ```bash
   node -e "const sequelize = require('./src/db/sequelize'); const fs = require('fs'); const sql = fs.readFileSync('database_objects.sql', 'utf8'); sequelize.query(sql).then(() => process.exit(0));"
   ```

## Environment Variables Checklist

Make sure these are set in your deployment platform:

- `DB_HOST` - Database host
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `DB_PORT` - Database port (usually 3306)
- `PORT` - Server port (platform may set this automatically)
- `NODE_ENV` - Set to `production`
- `OPENAI_API_KEY` - For LLM features (optional)

## Post-Deployment Steps

1. **Test API endpoints**:
   ```bash
   curl https://your-app-url.herokuapp.com/api/doctors
   ```

2. **Access frontend**:
   - Navigate to `https://your-app-url.herokuapp.com`

3. **Verify database**:
   - Check that all tables exist
   - Verify VIEWs and STORED PROCEDUREs are created
   - Test a few queries

## Troubleshooting

### Database Connection Issues

- Verify environment variables are set correctly
- Check database firewall/security groups allow connections
- Ensure database is accessible from deployment platform

### Port Issues

- Most platforms set `PORT` automatically
- If not, set it in environment variables

### Build Issues

- Ensure `package.json` has correct start script
- Check Node.js version compatibility
- Review build logs for errors

## Example URLs

After deployment, your application will be available at:

- **Heroku**: `https://your-app-name.herokuapp.com`
- **Railway**: `https://your-app-name.up.railway.app`
- **Vercel**: `https://your-app-name.vercel.app`

## Security Notes

- Never commit `.env` file to git
- Use platform secrets/environment variables
- Enable HTTPS (most platforms do this automatically)
- Consider rate limiting for production

---
