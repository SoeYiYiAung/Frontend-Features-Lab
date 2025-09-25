-- No API Key is needed in old Tinymce Version

    => if already install other version, remove first
    npm uninstall tinymce @tinymce/tinymce-angular

    => reinstall this version
    npm install tinymce@6.8.3 @tinymce/tinymce-angular@6.0.0 

    => import && add this in component 
    import tinymce from 'tinymce/tinymce';
        ngAfterViewInit() {
            tinymce.init({
            selector: '#editor',  // match your textarea id
            plugins: 'link table lists code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            skin_url: '/tinymce/skins/ui/oxide',  // load from local assets
            content_css: '/tinymce/skins/content/default/content.css',
        
            // Add this line to remove the promo banner
            promotion: false,  branding: false                                  
            });
        }

    => add this in HTML Template
        <editor class="col-12"
            [(ngModel)]="content"
            [init]="{
                base_url: '/tinymce',  
                suffix: '.min',
                height: 500,
                menubar: true,
                plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help',
                promotion: false,  branding: false
            }">
        </editor>

*************************************************************************************

-- API Key is needed in Latest Tinymce Version

    => install latest npm package first
    npm install tinymce @tinymce/tinymce-angular

    => add this in HTML Template 
    (where API key is needed which can be generate in Tinymce Website via email)
    <editor
        [(ngModel)]="content"
        [apiKey]="'pw19l5upp2ygkiolud6dcvdf7pk9dqatc7zpol429yq098zs'"
        [init]="{
            height: 400,
            menubar: true,
            plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'textcolor colorpicker'
            ],
            toolbar: 'undo redo | formatselect | ' +
                    'bold italic underline strikethrough | forecolor backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | removeformat | help | link image table',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }">
    </editor>