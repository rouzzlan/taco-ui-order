pipeline {
    agent any
    environment {
        DOCKER_TAG = 'harbour.739.net/taco-cloud/ui-order:0.0.3-1'
    }
    stages {
        stage('Build Docker') {
            when {
                expression {
                    env.BRANCH_NAME == 'master'
                  }
            }
            steps {
                sh '''
                    docker build -t ${DOCKER_TAG} .
                    docker login harbour.739.net -u="rouslan" -p="50m9FiD3"
                    docker push ${DOCKER_TAG}
                '''
            }
        }
    }
}
