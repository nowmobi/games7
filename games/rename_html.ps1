# PowerShell script to rename HTML files
$rootPath = Get-Location

# Process all subdirectories
Get-ChildItem -Path $rootPath -Directory | ForEach-Object {
    $folder = $_.FullName
    Write-Host "Checking folder: $folder"
    
    $indexHtml = Join-Path $folder "index.html"
    $indexCleanHtml = Join-Path $folder "index_clean.html"
    
    if (Test-Path $indexCleanHtml) {
        Write-Host "  Found index_clean.html"
        
        if (Test-Path $indexHtml) {
            Write-Host "  Renaming index.html to index1.html"
            Rename-Item -Path $indexHtml -NewName "index1.html" -Force
        }
        
        Write-Host "  Renaming index_clean.html to index.html"
        Rename-Item -Path $indexCleanHtml -NewName "index.html" -Force
        
        Write-Host "  Done"
    } else {
        Write-Host "  No index_clean.html found, skipping"
    }
    Write-Host ""
}

Write-Host "All folders processed!" -ForegroundColor Green
