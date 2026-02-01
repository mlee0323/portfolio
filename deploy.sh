#!/bin/bash

# ==========================================
# AWS S3 & CloudFront Deployment Script
# ==========================================

# 1. 설정 (사용자 수정 필요)
BUCKET_NAME="minseok.cloud"
DISTRIBUTION_ID="E27KTF1HS4OVXZ" # 선택 사항 (없으면 비워두세요)
AWS_PROFILE="mlee0323" # AWS CLI 프로필 이름

# 2. 빌드
echo "🚀 Building the application..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting deployment."
  exit 1
fi

# 3. S3 배포
echo "📦 Deploying to S3 bucket: $BUCKET_NAME..."
aws s3 sync out/ s3://$BUCKET_NAME --delete --profile $AWS_PROFILE

if [ $? -ne 0 ]; then
  echo "❌ S3 deployment failed."
  exit 1
fi

# 4. CloudFront 캐시 무효화 (선택 사항)
if [ -n "$DISTRIBUTION_ID" ] && [ "$DISTRIBUTION_ID" != "your-cloudfront-distribution-id" ]; then
  echo "🔄 Invalidating CloudFront cache..."
  aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --profile $AWS_PROFILE
else
  echo "⚠️ CloudFront Distribution ID not set. Skipping invalidation."
fi

echo "✅ Deployment complete!"
