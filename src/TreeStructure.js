export const treeData = [
    {
      key: "0",
      label: "Home",
      title: "Home Folder",
      component: "/",
      children: [
        {
          key: "0-0",
          label: "Myname",
          title: "Documents Folder",
          component: "/myname",
          children: [
            {
              key: "0-0-1",
              label: "FileA.txt",
              title: "Text File",
              component: "/myname/fileA",

            },
            {
              key: "0-0-2",
              label: "FileB.txt",
              title: "Text File",
              component: "/myname/fileB",
            },
          ],
        },
        {
            key: "0-1",
            label: "Projects",
            title: "Documents Folder",
            component: "/projects",
            children: [
              {
                key: "0-1-1",
                label: "MySuperSecretProject",
                title: "Document Folder",
                component: "/projects/mysupersecretproject",
                children: [
                    {
                      key: "0-1-2",
                      label: "MySuperSecretProject.txt",
                       title: "Document File",
                      component: "/projects/mysupersecretproject",
                    }, 
                  ],
              }, 
            ],
          },
      ],
    },
   ];
