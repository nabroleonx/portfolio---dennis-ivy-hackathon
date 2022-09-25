---
title: "Archive Manager in Python with simple GUI"
date: "Oct 3, 2021"
excerpt: "How many of us use archiver extractor tools to extract zip files. On top of that some tools are not user-friendly "
cover_image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9g759piwximsbreyej4i.png"
category: "Python"
---

How many of us use archiver extractor tools to extract **zip** files. On top of that some tools are not user-friendly, so we have hard time utilizing them how we want to. However, with python extracting files has always been easier. Let's look at some common examples.

For the task we will use python's built-in module `zipfile`.

From the various functionalities that this module provides, we are going to see how to:-

- Extract all files in a zip file.
- Extract a single file.
- Extract specific files using certain conditions.
- Extracting password protected files.

Let's talk about them in a bit more detail. We are going to use a common snippet for all of them and change only the required lines.

```python
from zipfile import ZipFile

path_of_zip_file = input("Enter path of the zip file > ")
path_to_extract_to = input("Enter the path you want to extract to > ")

with ZipFile(path_of_zip_file , 'r') as files:
    # here is where the codes are gonna go
```

<br>

### **1. Extract all files in a zip file**

For this we will just use the `extractall()` method.

```python
files.extractall(directory_to_extract_to)
```

<br>

### **2. Extract a single file**

To extract a single file we are going to use `read()` method of `ZipFile` objects. The `read()` method returns the bytes of the file name in the archive, so we are gonna take that and create the file with it.

`ZipFile.read(name, pwd=None)` method takes two parameters _Name_ and _Password_. If you are working with encrypted file, don't forget to add your password.

> Now, we are going create a variable for our file name below the paths we declared on the common code snippet, but you can pass the file name directly too.

We are going to import `os` module, to write our file in the path we chose.

```python
file_name= os.path.join(directory_to_extract_to, file_to_extract)
```

Now we can create our file.

```python
with open(file_name, 'wb') as file:
    file.write(files.read(file_name))
```

<br>

### **3. Extract specific files using certain conditions**

Sometimes we may not want to extract everything in a zip file. For example we may want to extract **.py** files only. We can so this very easily using conditions. Our condition doesn't have to be file extension, but to easily demonstrate we will be using that here.

```python
for file in files.namelist():
    if file.endswith(".py"):
        files.extract(file)
```

<br>

### **4. Extracting password protected files.**

This is pretty straightforward like we mentioned earlier. Just create a variable for your password and pass it in or you can just pass it in as it is too.

```python
files.extractall(directory_to_extract_to, pwd=b'password')
```

### **❗NOTE**:

Decryption is extremely slow as it is implemented in native Python rather than C.

I wanted to show how we can give our console app a user-friendly GUI using the [`Gooey module`](https://github.com/chriskiehl/Gooey), but I didn't want the post to be longer than it is. However, you can check the implementation in my [Github](https://github.com/nabroleonx/Archive-Manager). It is a very basic implementation, so read the documentation of gooey and you can add many features to it.

**Don't forget to leave a star if you like it😉.**

> If you like what you read, follow for more.

[Twitter](https://twitter.com/nabroleonx) | [Linkedin](https://linkedin.com/in/abel-ayalew-a564b7210/) | [Github](https://github.com/nabroleonx)
