# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)


docker pull mcr.microsoft.com/oryx/build:latest
docker run --rm -it -v "C:\Users\nicolaskr\source\repos\Active it\ScratchNoShared:/app" -w /app mcr.microsoft.com/oryx/build:latest oryx build /app --platform nodejs --platform-version 20 --output /app/output

swa deploy --app-name activit-cicd-swa --ressource-group activit-rg --output-location ./dist --api-location ./api