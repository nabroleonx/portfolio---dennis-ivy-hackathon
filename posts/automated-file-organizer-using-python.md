---
title: "Automated File Organizer using Python"
date: "Sep 01, 2021"
excerpt: "I am sure I am not the only one who have dozen of folders with tons of unsorted files. Movies, books, music, documents "
cover_image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mn5fui4j727a80ua302g.png"
category: "Python"
---

I am sure I am not the only one who have dozen of folders with tons of unsorted files. Movies, books, music, documents all in the same folder. We just keep downloading stuff and before we know it our Downloads folder is a mess. Y'all recognize this👇?

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8pl1ax01dpj0tdznvp2u.png)

If you do, SHAME ON YOU! how can you let this happen. Anyhow, let's not waste time blaming one another.

I have OCD when it comes to organizing a file. I sort my movies with actors, year of release, genre etc. However, it can be daunting and tiresome task to check and sort the files especially when you have so many files. Why bother wasting our time going through every folder and sorting each file by file type when we can let python take care of it for us. This may not do everything you want, but it will be a really good first step.

**Without further ado, let's get to the code**

The first thing we do is import the `os` and `shutil` modules.

> The [`shutil`](https://docs.python.org/3/library/shutil.html) module offers a number of high-level operations on files and collections of files. In particular, functions are provided which support file copying and removal.

Coupled with the fact that we can use [`os`](https://docs.python.org/3/library/os.html) module to manage the path related issues, we can automate the whole process of moving files to folders we want.

Now let's write the function that will contain the logic for moving and creating new directories when needed.

```python
def Organizer(path, userSelection):

    if os.path.exists(path):
        for file in os.listdir(path):

            filePath = os.path.join(path, file)

            if os.path.isdir(filePath):
                pass

            filename, fileExtension = os.path.splitext(filePath)

            if fileExtension in userSelection:

                relocatingPath = os.path.join(
                    path, userSelection[fileExtension])

                if not os.path.exists(relocatingPath):
                    os.makedirs(relocatingPath)

                try:
                    shutil.move(filePath, relocatingPath)
                except OSError as error:
                    print('''Something unexpected happened!
                        Error message:''', error)
        print("\n\tYour files are sorted Successfully!")
```

As you can see, our function has two parameters: `path`, `userSelection`. We will be defining both in a moment.

_Let's take a moment and talk about how we are going to implement the logic for handling the files._

We are going to have predefined dictionary `extenstionSet` for the most common file types.

> The dictionary will have file extensions(i.e. '.py', '.exe', '.mp4' ...) as keys and folder names(i.e. Movies, Documents ...) as values.

```python
extenstionSet = {
        ".docx": "Documents",
        ".xslx": "Documents",
        ".pdf": "Documents",
        ".csv": "Documents",
        ".xlsx": "Documents",
        ".zip": "Compressed",
        ".rar": "Compressed",
        ".mp3": "Musics",
        ".m4a": "Musics",
        ".ogg": "Musics",
        ".wav": "Musics",
        ".jpg": "Pictures",
        ".png": "Pictures",
        ".gif": "Pictures",
        ".tif": "Pictures",
        ".mp4": "Videos",
        ".mkv": "Videos",
        ".3gp": "Videos",
        ".mpeg4": "Videos",
    }
```

Now let's write the code that will take the path of the folder to be organized as an input from the user.

```python
path = input('''\tPaste the path you want to organize
    >>> ''')

while not os.path.exists(path):
    print('''\n\tThe path you entered doesn\'t exist.
    Make sure there aren\'t spelling errors
    and enter the correct path. ''')

    path = input('''\n\tPaste the path you want to organize
    >>> ''')
```

We want to provide the user with two options:-

1. Sort all the files in the directory using the predefined `extensionSet` dictionary
2. Sort certain files by entering custom set of file extensions. Since our `extensionSet` have limited number of extensions, this option will allow them to sort files with any extension.

To do this we will create an empty dictionary to store user selected extensions and create a menu that will let the user choose from the two options above.

```python
userSelection = {}
userMenu = 0

while userMenu == 0:
    userMenu = input('''
        In what way do you want to organize.

        1). Organize all files in the directory.
        2). Organize files of certain extensions in the directory.

        >>> ''')

    if userMenu == '1':
        userSelection = extenstionSet

    elif userMenu == '2':
        ext = input('''\n\tEnter the extensions you want to organize
        preceeded by a period and separated by space.
        For-example:- '.py .json .csv'
        >>> ''')

        folderName = input('''\n\tEnter a folder name of your choice
        for the selected extensions
        >>> ''')

        for i in ext.split():
            userSelection[i] = folderName
    else:
        print(f'''\n\tYou have entered an invalid input of {userMenu}
    Please enter a valid input from the options provided. \n''')
        userMenu = 0
```

Now that everything is sorted all that is left is call our function.

```python
if __name__ == "__main__":
    Organizer(path, userSelection)
```

You can find the script here: https://github.com/nabroleonx/Automated-file-organizer
_dont forget to leave a star if you like it_ 😉

P.S. What I did is just basic implementation. However, I will be adding new features to the script. Stay tuned!

That's about today's blog. Thanks for sticking to the end. I am noob writer trying to get step my game up so any comments/suggestions are appreciated. I am hoping to post many informative contents in the future, if you are interested follow me for more.

[Twitter](https://twitter.com/nabroleonx) | [Linkedin](https://linkedin.com/in/abel-ayalew-a564b7210/) | [Github](https://github.com/nabroleonx)
