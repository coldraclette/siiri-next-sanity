export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages Content')
            .items([
              S.listItem()
                .title('Information Page')
                .child(
                  S.document()
                    .schemaType('informationPage')
                    .documentId('informationPage')
                    .title('Information Page')
                ),
            ])
        ),
      S.listItem()
        .title('Projects list')
        .child(
          S.document()
            .schemaType('projectsList')
            .documentId('projectsList')
            .title('Projects List')
        ),
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .child((projectId: any) =>
              S.document().schemaType('project').documentId(projectId)
            )
        ),

      // ...S.documentTypeListItems().filter(
      //   (listItem: any) => !["informationPage"].includes(listItem.getId())
      // ),
    ]);
