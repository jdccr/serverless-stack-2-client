const dev = {
  STRIPE_KEY: "pk_test_mOHANhosO4mzPZub7SbejCLe",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-l37dkekuuhsi"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://his3i9m0b9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wQegJLjox",
    APP_CLIENT_ID: "4k8o9u33r5k73da5239qi14vn0",
    IDENTITY_POOL_ID: "us-east-1:7459e282-4ac1-4656-b5fb-5daec764177e"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_mOHANhosO4mzPZub7SbejCLe",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-2ipf4iaddv62"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://cgb76za9md.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_OPr42Gyq1",
    APP_CLIENT_ID: "3upf5bo2m11kob2vcj8u090ftm",
    IDENTITY_POOL_ID: "us-east-1:5164e490-b56e-4339-ac21-7e3b1b3b789d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {  
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
