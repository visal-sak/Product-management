pipeline {
    agent any
    // Environment
    // Share library
    tools {
        nodejs 'nodejs-18.12.1'
    }

    stages {
        stage('Get source code from git') {
            steps {
               git branch: 'main', url: 'https://github.com/visal-sak/Product-management'
                sh '''
                    whoami
                    pwd
                    echo "hi bitch"
                    ls -lrt
                '''
            }
        }
        stage("Build") {
            steps {
                echo "Building Images for deploying"
                // sh "node --version"
                // sh "npm --version"
                // sh "npm install "
                // sh "npm run build"
                // sh "ls -lrt"
                sh 'docker build -t sal02 .'

                // Deploy image to the Docker Hub
                // withCredentials([usernamePassword(credentialsId: 'docker_hub_access_account', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                //     sh '''
                //     docker login -u $USERNAME -p $PASSWORD
                //     docker tag nextjsv1 muyleangin/nextjsv1:1.1
                //     docker push muyleangin/nextjsv1:1.1
                //     '''
                // }
                withCredentials([usernamePassword(credentialsId: 'dockerhub_accessToken', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {

                                        sh '''
                    docker login -u $USERNAME -p $PASSWORD
                    docker tag sal02 sakvisal/nextjs:latest
                    docker push sakvisal/nextjs:latest
                    '''
    // some block
}
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploy the images"

                // Start containers using Docker Compose
                sh 'docker run -d -p 3003:3000 --name nextjs-sal1 sal02'
            }
        }
    }
}