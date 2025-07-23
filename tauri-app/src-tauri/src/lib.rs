use tauri_plugin_fs::FsExt;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn read_file_if_exists(path: &str) -> Result<String, String> {
    use std::fs;
    use std::path::Path;

    if Path::new(path).exists() {
        fs::read_to_string(path).map_err(|e| e.to_string())
    } else {
        Err("File does not exist".to_string())
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // allowed the given directory
            let scope = app.fs_scope();
            let allowed = scope.allow_directory("/Users/bmouli/Downloads", true);
            dbg!(allowed);

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, read_file_if_exists])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
