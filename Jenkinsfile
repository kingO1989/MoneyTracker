pipeline {
    agent { docker { image 'node:18.18.2-alpine3.18' } }
    stages {
        stage('build') {
            environment {
                  HOME="."
                }
            steps {
                sh 'npm run build'
            }
        }
    }
}