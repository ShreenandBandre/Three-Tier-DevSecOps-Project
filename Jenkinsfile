pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = "backend-app"
        DOCKER_IMAGE_FRONTEND = "frontend-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/ShreenandBandre/Three-Tier-DevSecOps-Project.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_BACKEND ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_FRONTEND ./frontend'
            }
        }

        stage('List Images') {
            steps {
                sh 'docker images'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS 🚀'
        }
        failure {
            echo 'FAILED ❌'
        }
    }
}